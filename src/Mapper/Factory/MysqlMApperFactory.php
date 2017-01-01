<?php
namespace Pacificnm\Cron\Mapper\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Zend\Hydrator\Aggregate\AggregateHydrator;
use Pacificnm\Cron\Mapper\MysqlMapper;
use Pacificnm\Cron\Hydrator\Hydrator;
use Pacificnm\Cron\Entity\Entity;

class MysqlMApperFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Pacificnm\Cron\Mapper\MysqlMapper
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $hydrator = new AggregateHydrator();
        
        $hydrator->add(new Hydrator());
        
        $readAdapter = $serviceLocator->get('db1');
        
        $writeAdapter = $serviceLocator->get('db2');
        
        $prototype = new Entity();
        
        return new MysqlMapper($readAdapter, $writeAdapter, $hydrator, $prototype);
    }
}