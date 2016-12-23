<?php
namespace Cron\Form\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Cron\Form\Form;

class FormFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Cron\Form\Form
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        return new Form();
    }
}

