<?php
namespace Pacificnm\Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Controller\IndexController;

class IndexControllerFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Pacificnm\Cron\Controller\IndexController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Pacificnm\Cron\Service\ServiceInterface');
        
        return new IndexController($service);
    }
}
