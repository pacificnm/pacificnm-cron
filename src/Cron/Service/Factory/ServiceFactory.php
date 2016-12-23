<?php
namespace Cron\Service\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Service\Service;

class ServiceFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Cron\Service\CronService
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $mapper = $serviceLocator->get('Cron\Mapper\MysqlMapperInterface');
        
        return new Service($mapper);
    }
}