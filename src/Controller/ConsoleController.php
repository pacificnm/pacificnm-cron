<?php
namespace Pacificnm\Cron\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\Console\Adapter\AdapterInterface as Console;
use Zend\Console\Request as ConsoleRequest;
use RuntimeException;
use Zend\Log\Writer\Stream;
use Zend\Log\Logger;
use Pacificnm\Cron\Service\ServiceInterface;
use Pacificnm\Cron\Entity\Entity;

class ConsoleController extends AbstractActionController
{

    /**
     *
     * @var CronServiceInterface
     */
    protected $service;

    /**
     *
     * @var Logger
     */
    protected $logService;

    /**
     *
     * @var Stream
     */
    protected $writerService;

    /**
     *
     * @var Console
     */
    protected $console;

    /**
     *
     * @var ConsoleRequest
     */
    protected $request;

    /**
     *
     * @var number
     */
    protected $minute;

    /**
     *
     * @var number
     */
    protected $hour;

    /**
     *
     * @var number
     */
    protected $day;

    /**
     *
     * @var number
     */
    protected $mon;

    /**
     *
     * @var number
     */
    protected $dow;

    /**
     *
     * @param CronServiceInterface $service            
     */
    public function __construct(ServiceInterface $service, Console $console)
    {
        $this->service = $service;
        
        $this->console = $console;
        
        $this->logService = new Logger();
        
        $this->writerService = new Stream('./data/log/' . date('Y-m-d') . '-cron.log');
        
        $this->logService->addWriter($this->writerService);
        
        $this->request = $this->getRequest();
        
        // get the time and break it up into something we can querry on
        $this->minute = date("i", time());
        
        $this->hour = date("h", time());
        
        $this->day = date("d", time());
        
        $this->mon = date("m", time());
        
        $this->dow = date("w", time());
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Zend\Mvc\Controller\AbstractActionController::indexAction()
     */
    public function indexAction()
    {
        
        // validate we are in a console
        if (! $this->request instanceof ConsoleRequest) {
            throw new RuntimeException('Cannot handle request of type ' . get_class($this->request));
        }
        
        $start = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron started {$start}\n", 3);
        
        $this->logService->info("Cron started {$start}");
        
        // grab all run once and do them first.
        $cronEnititys = $this->service->getRunOnce();
        
        $this->runCronJobs($cronEnititys);
        
        // grab for this current min
        $cronEnititys = $this->service->getByTime($this->minute, 0, 0, 0, 0);
        
        $this->runCronJobs($cronEnititys);
        
        // grab for top of the hour
        $cronEnititys = $this->service->getByTime(0, $this->hour, 0, 0, 0);
        
        $this->runCronJobs($cronEnititys);
        
        // grab for current min and hour
        $cronEnititys = $this->service->getByTime($this->minute, $this->hour, 0, 0, 0);
        
        $this->runCronJobs($cronEnititys);
        
        // grab for top of day
        $cronEnititys = $this->service->getByTime(0, 0, $this->day, 0, 0);
        
        // grab for current min and hour and day
        $cronEnititys = $this->service->getByTime($this->minute, $this->hour, $this->day, 0, 0);
        
        $this->runCronJobs($cronEnititys);
        
        // end
        $end = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron Completed {$end}\n", 3);
        
        $this->logService->info("Cron Completed {$end}");
    }

    /**
     * Lists all crons
     * 
     * @throws RuntimeException
     */
    public function listAction()
    {
        // validate we are in a console
        if (! $this->request instanceof ConsoleRequest) {
            throw new RuntimeException('Cannot handle request of type ' . get_class($this->request));
        }
        
        $page = $this->params()->fromRoute("page");
        
        $table = new \Zend\Text\Table\Table(array(
            'columnWidths' => array(
                10,
                10,
                40,
                10,
                10,
                10,
                10
            )
        ));
        
        $table->appendRow(array(
            'Cron ID',
            'Time',
            'Command',
            'Run Once',
            'Last Ran',
            'Enabled',
            'Running',
            
        ));
        
        $paginator = $this->service->getAll(array());
        
        $paginator->setCurrentPageNumber($page);
        
        $paginator->setItemCountPerPage(25);
        
        foreach($paginator as $entity) {
            $time = $entity->getCronMinute() . "," . $entity->getCronHour() . "," . $entity->getCronDom() . "," . $entity->getCronMonth();
            
            $table->appendRow(array(
                $entity->getCronId(),
                $time,
                $entity->getCronCommand(),
                ($entity->getCronRunOnce() == 1 ? 'yes' : 'no'),
                date('m/d/Y h:i A', $entity->getCronLastRun()),
                ($entity->getCronEnabled() == 1 ? 'yes' : 'no'),
                ($entity->getCronStatus() == 1 ? 'yes' : 'no'),
            
            ));
        }
        
        if($paginator->count() == 0) {
            $this->console->write("No cron jobs available\n", 2);
        } else {
            echo $table;
        }
        
        
        $end = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron List Completed {$end}\n", 3);
    }

    /**
     * Gets all running crons
     *
     * @throws RuntimeException
     */
    public function runningAction()
    {
        // validate we are in a console
        if (! $this->request instanceof ConsoleRequest) {
            throw new RuntimeException('Cannot handle request of type ' . get_class($this->request));
        }
        
        $page = $this->params()->fromRoute("page");
        
        $table = new \Zend\Text\Table\Table(array(
            'columnWidths' => array(
                10,
                10,
                40,
                10,
                10,
                10,
                10
            )
        ));
        
        $table->appendRow(array(
            'Cron ID',
            'Time',
            'Command',
            'Run Once',
            'Last Ran',
            'Enabled',
            'Running',
        
        ));
        
        $paginator = $this->service->getAll(array('cronStatus' => 1));
        
        $paginator->setCurrentPageNumber($page);
        
        $paginator->setItemCountPerPage(25);
        
        foreach($paginator as $entity) {
            $time = $entity->getCronMinute() . "," . $entity->getCronHour() . "," . $entity->getCronDom() . "," . $entity->getCronMonth();
        
            $table->appendRow(array(
                $entity->getCronId(),
                $time,
                $entity->getCronCommand(),
                ($entity->getCronRunOnce() == 1 ? 'yes' : 'no'),
                date('m/d/Y h:i A', $entity->getCronLastRun()),
                ($entity->getCronEnabled() == 1 ? 'yes' : 'no'),
                ($entity->getCronStatus() == 1 ? 'yes' : 'no'),
        
            ));
        }
        
        if($paginator->count() == 0) {
            $this->console->write("No running cron jobs\n", 2);
        } else {
            echo $table;
        }
        
        
        
        $end = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron Running Completed {$end}\n", 3);
    }

    /**
     * Kills a running cron and clears ir from the database
     *
     * @throws RuntimeException
     */
    public function killAction()
    {
        // validate we are in a console
        if (! $this->request instanceof ConsoleRequest) {
            throw new RuntimeException('Cannot handle request of type ' . get_class($this->request));
        }
        
        $pid = $this->params('pid');
        
        if (! $pid) {
            throw new RuntimeException('Missing required param');
        }
        
        $start = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron Kill {$start} PID {$pid}\n", 3);
        
        $this->logService->info("Cron Kill Ran {$start} PID {$pid}");
        
        // start
        // look up PID in database otherwise do nothing. we only kill existing pid thats match to our service.
        // If the pid is not in the table then we need a human to look at and kill it.
        
        // end
        
        $end = date('m/d/Y h:i a', time());
        
        $this->console->write("Cron Kill Completed {$end} PID {$pid}\n", 3);
        
        $this->logService->info("Cron Kill Completed {$end} PID {$pid}");
    }

    /**
     *
     * @param Entity $cronEnititys            
     * @return \Cron\Controller\ConsoleController
     */
    protected function runCronJobs($cronEnititys)
    {
        foreach ($cronEnititys as $cronEnitity) {
            $this->console->write("Start {$cronEnitity->getCronCommand()}\n", 3);
            
            $this->logService->info("Start {$cronEnitity->getCronCommand()}");
            
            $cronEnitity->setCronLastRun(time());
            
            $cronEnitity->setCronStatus(1);
            
            $cronEnitity = $this->service->save($cronEnitity);
            
            $cmd = getcwd() . '/bin/' . $cronEnitity->getCronCommand();
            
            try {
                exec($cmd);
            } catch (\Exception $e) {
                $this->console->write("Failed to run {$cronEnitity->getCronCommand()} Error: {$e->getMessage()}\n", 2);
                
                $this->logService->err("Failed to run {$cronEnitity->getCronCommand()} Error: {$e->getMessage()}");
                
                $cronEnitity->setCronEnabled(0);
                
                $cronEnitity = $this->service->save($cronEnitity);
                
                continue;
            }
            
            // if we are set to run once then disable it
            if ($cronEnitity->getCronRunOnce()) {
                $cronEnitity->setCronEnabled(0);
            }
            
            $cronEnitity->setCronStatus(0);
            
            $cronEnitity = $this->service->save($cronEnitity);
            
            // trigger event
            $this->logService->info("End {$cronEnitity->getCronCommand()}");
            
            return $this;
        }
    }
}
