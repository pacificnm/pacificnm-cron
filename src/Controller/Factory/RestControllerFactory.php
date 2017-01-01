<?php
namespace Pacificnm\Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Controller\RestController;

class RestControllerFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Pacificnm\Cron\Controller\RestController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Pacificnm\Cron\Service\ServiceInterface');
        
        $form = $realServiceLocator->get('Pacificnm\Cron\Form\Form');
        
        return new RestController($service, $form);
    }
}

