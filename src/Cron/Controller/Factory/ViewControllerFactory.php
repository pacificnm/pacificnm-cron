<?php
namespace Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Controller\ViewController;

class ViewControllerFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Cron\Controller\ViewController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Cron\Service\ServiceInterface');
        
        return new ViewController($service);
    }
}