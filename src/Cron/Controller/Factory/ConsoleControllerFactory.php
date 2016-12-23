<?php
namespace Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Controller\ConsoleController;

class ConsoleControllerFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Cron\Controller\ConsoleController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {        
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Cron\Service\ServiceInterface');
        
        $console = $realServiceLocator->get('console');
        
        return new ConsoleController($service, $console);
    }
}