<?php
namespace Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Controller\CreateController;

class CreateControllerFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Cron\Controller\CreateController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Cron\Service\ServiceInterface');
        
        $form = $realServiceLocator->get('Cron\Form\Form');
        
        return new CreateController($service, $form);
    }
}