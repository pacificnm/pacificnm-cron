<?php
namespace Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Controller\IndexController;

class IndexControllerFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Cron\Controller\IndexController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Cron\Service\ServiceInterface');
        
        return new IndexController($service);
    }
}
