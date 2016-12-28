<?php
namespace Cron\View\Helper\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\View\Helper\CronSearchForm;

class CronSearchFormFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Cron\View\Helper\CronSearchForm
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        $realServiceLocator = $serviceLocator->getServiceLocator();
        
        
        return new CronSearchForm();
    }
}

