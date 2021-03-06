<?php
namespace Pacificnm\Cron;

use Zend\Console\Adapter\AdapterInterface as Console;

class Module
{
    /**
     * System cron is runs this script every min. It checks cron table for any consol controllers to run.
     * 

     * @param Console $console
     * @return string[]|string[][]
     */
    public function getConsoleUsage(Console $console)
    {
        return array(
            'cron --run' => 'Checks for cron jobs and runs them.',
            'cron --list [--page=]' => 'Lists active crons.',
            'cron --running [--page=]' => 'List running cron jobs',
            'cron --kill --pid=[pid]' => 'Kills a running cron and sets it to disabled'
        );
    }
    
    public function getConfig()
    {
        return include __DIR__ . '/../config/pacificnm.cron.global.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/',
                ),
            ),
        );
    }
}
