<?php
namespace Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Controller\UpdateController;

class UpdateControllerFactory
{

    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Cron\Controller\UpdateController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Cron\Service\ServiceInterface');
        
        $form = $realServiceLocator->get('Cron\Form\Form');
        
        return new UpdateController($service, $form);
    }
}