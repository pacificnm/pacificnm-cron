<?php
namespace Pacificnm\Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Controller\CreateController;

class CreateControllerFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Pacificnm\Cron\Controller\CreateController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Pacificnm\Cron\Service\ServiceInterface');
        
        $form = $realServiceLocator->get('Pacificnm\Cron\Form\Form');
        
        return new CreateController($service, $form);
    }
}