<?php
namespace Cron\Mapper\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Mapper\MysqlMapper;
use Zend\Hydrator\Aggregate\AggregateHydrator;
use Cron\Hydrator\Hydrator;
use Cron\Entity\Entity;

class MysqlMApperFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Cron\Mapper\MysqlMapper
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