<?php
namespace Pacificnm\Cron\Service\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Service\Service;

class ServiceFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Pacificnm\Cron\Service\CronService
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $mapper = $serviceLocator->get('Pacificnm\Cron\Mapper\MysqlMapperInterface');
        
        return new Service($mapper);
    }
}