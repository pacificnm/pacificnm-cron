<?php
namespace Pacificnm\Cron\Service;

use Pacificnm\Cron\Mapper\MysqlMapperInterface;
use Pacificnm\Cron\Entity\Entity;

class Service implements ServiceInterface
{

    /**
     *
     * @var MysqlMapperInterface
     */
    protected $mapper;

    /**
     *
     * @param MysqlMapperInterface $mapper            
     */
    public function __construct(MysqlMapperInterface $mapper)
    {
        $this->mapper = $mapper;
    }

    /**
     *
     * {@inheritDoc}
     *
     * @see \Pacificnm\Cron\Service\CronServiceInterface::getAll()
     */
    public function getAll($filter)
    {
        return $this->mapper->getAll($filter);
    }

    /**
     *
     * {@inheritDoc}
     *
     * @see \Pacificnm\Cron\Service\CronServiceInterface::get()
     */
    public function get($id)
    {
        return $this->mapper->get($id);
    }

    /**
     * 
     * {@inheritDoc}
     * @see \Pacificnm\Cron\Service\CronServiceInterface::getRunOnce()
     */
    public function getRunOnce()
    {
        return $this->mapper->getRunOnce();
    }
    
    /**
     * 
     * {@inheritDoc}
     * @see \Pacificnm\Cron\Service\CronServiceInterface::getByTime()
     */
    public function getByTime($minute, $hour, $day, $mon, $dow)
    {
        return $this->mapper->getByTime($minute, $hour, $day, $mon, $dow);    
    }
    
    /**
     *
     * {@inheritDoc}
     *
     * @see \Pacificnm\Cron\Service\CronServiceInterface::save()
     */
    public function save(Entity $entity)
    {
        return $this->mapper->save($entity);
    }

    /**
     *
     * {@inheritDoc}
     *
     * @see \Pacificnm\Cron\Service\CronServiceInterface::delete()
     */
    public function delete(Entity $entity)
    {
        return $this->mapper->delete($entity);
    }
}