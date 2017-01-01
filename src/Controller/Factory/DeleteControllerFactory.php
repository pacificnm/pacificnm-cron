<?php
namespace Pacificnm\Cron\Controller\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Controller\DeleteController;

class DeleteControllerFactory
{

    /**
     *
     * @param ServiceLocatorInterface $serviceLocator            
     * @return \Pacificnm\Cron\Controller\DeleteController
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        $service = $realServiceLocator->get('Pacificnm\Cron\Service\ServiceInterface');
        
        return new DeleteController($service);
    }
}
