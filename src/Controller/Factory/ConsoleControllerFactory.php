<?php
namespace Pacificnm\Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Controller\ConsoleController;

class ConsoleControllerFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Pacificnm\Cron\Controller\ConsoleController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {        
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Pacificnm\Cron\Service\ServiceInterface');
        
        $console = $realServiceLocator->get('console');
        
        return new ConsoleController($service, $console);
    }
}