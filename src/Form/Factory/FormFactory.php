<?php
namespace Pacificnm\Cron\Form\Factory;

use Zend\ServiceManager\ServiceLocatorInterface;
use Pacificnm\Cron\Form\Form;

class FormFactory
{
    /**
     * 
     * @param ServiceLocatorInterface $serviceLocator
     * @return \Pacificnm\Cron\Form\Form
     */
    public function __invoke(ServiceLocatorInterface $serviceLocator)
    {
        return new Form();
    }
}

