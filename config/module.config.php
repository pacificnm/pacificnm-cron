<?php
/**
 * Pacific NM (https://www.pacificnm.com)
 *
 * @link      https://github.com/pacificnm/pnm for the canonical source repository
 * @copyright Copyright (c) 20011-2016 Pacific NM USA Inc. (https://www.pacificnm.com)
 * @license
 */
return array(
    'module' => array(
        'Cron' => array(
            'name' => 'Cron',
            'version' => '1.0.1',
            'install' => array(
                'require' => array(),
                'sql' => 'sql/cron.sql'
            )
        )
    ),
    'controllers' => array(
        'factories' => array(
            'Cron\Controller\ConsoleController' => 'Cron\Controller\Factory\ConsoleControllerFactory',
            'Cron\Controller\CreateController' => 'Cron\Controller\Factory\CreateControllerFactory',
            'Cron\Controller\DeleteController' => 'Cron\Controller\Factory\DeleteControllerFactory',
            'Cron\Controller\IndexController' => 'Cron\Controller\Factory\IndexControllerFactory',
            'Cron\Controller\UpdateController' => 'Cron\Controller\Factory\UpdateControllerFactory',
            'Cron\Controller\ViewController' => 'Cron\Controller\Factory\ViewControllerFactory',
            'Cron\Controller\RestController' => 'Cron\Controller\Factory\RestControllerFactory'
        )
    ),
    'service_manager' => array(
        'factories' => array(
            'Cron\Mapper\MysqlMapperInterface' => 'Cron\Mapper\Factory\MysqlMApperFactory',
            'Cron\Service\ServiceInterface' => 'Cron\Service\Factory\ServiceFactory',
            'Cron\Form\Form' => 'Cron\Form\Factory\FormFactory'
        )
    ),
    'router' => array(
        'routes' => array(
            'cron-create' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'New',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'literal',
                'options' => array(
                    'route' => '/admin/cron/create',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\CreateController',
                        'action' => 'index'
                    ),
                    'constraints' => array(
                        'id' => '[0-9]+'
                    )
                )
            ),
            'cron-delete' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'Delete',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'segment',
                'options' => array(
                    'route' => '/admin/cron/delete/[:id]',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\DeleteController',
                        'action' => 'index'
                    ),
                    'constraints' => array(
                        'id' => '[0-9]+'
                    )
                )
            ),
            'cron-index' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'Home',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'literal',
                'options' => array(
                    'route' => '/admin/cron',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\IndexController',
                        'action' => 'index'
                    )
                )
            ),
            'cron-rest' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'Rest',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'segment',
                'options' => array(
                    'route' => '/api/cron[/:id]',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\RestController',
                    )
                )
            ),
            'cron-update' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'Edit',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'segment',
                'options' => array(
                    'route' => '/admin/cron/update/[:id]',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\UpdateController',
                        'action' => 'index'
                    ),
                    'constraints' => array(
                        'id' => '[0-9]+'
                    )
                )
            ),
            
            'cron-view' => array(
                'pageTitle' => 'Cron',
                'pageSubTitle' => 'View',
                'activeMenuItem' => 'admin-index',
                'activeSubMenuItem' => 'cron-index',
                'type' => 'segment',
                'options' => array(
                    'route' => '/admin/cron/view/[:id]',
                    'defaults' => array(
                        'controller' => 'Cron\Controller\ViewController',
                        'action' => 'index'
                    ),
                    'constraints' => array(
                        'id' => '[0-9]+'
                    )
                )
            )
        )
    ),
    'console' => array(
        'router' => array(
            'routes' => array(
                'cron-console-run' => array(
                    'options' => array(
                        'route' => 'cron --run',
                        'defaults' => array(
                            'controller' => 'Cron\Controller\ConsoleController',
                            'action' => 'index'
                        )
                    )
                ),
                'cron-console-list' => array(
                    'options' => array(
                        'route' => 'cron --list [--page=]',
                        'defaults' => array(
                            'controller' => 'Cron\Controller\ConsoleController',
                            'action' => 'list'
                        )
                    )
                ),
                'cron-console-running' => array(
                    'options' => array(
                        'route' => 'cron --running',
                        'defaults' => array(
                            'controller' => 'Cron\Controller\ConsoleController',
                            'action' => 'running'
                        )
                    )
                ),
                'cron-console-kill' => array(
                    'options' => array(
                        'route' => 'cron --kill --pid=',
                        'defaults' => array(
                            'controller' => 'Cron\Controller\ConsoleController',
                            'action' => 'kill'
                        )
                    )
                )
            )
        )
    ),
    
    // view helpers
    'view_helpers' => array(
        'factories' => array(),
        'invokables' => array()
    ),
    
    // view manager
    'view_manager' => array(
        'template_path_stack' => array(
            __DIR__ . '/../view'
        )
    ),
    'acl' => array(
        'default' => array(
            'guest' => array(),
            'user' => array(),
            'administrator' => array(
                'cron-index',
                'cron-create',
                'cron-update',
                'cron-delete',
                'cron-view'
            )
        )
    ),
    // menu
    'menu' => array(
        'default' => array(
            array(
                'name' => 'Admin',
                'route' => 'admin-index',
                'icon' => 'fa fa-gear',
                'order' => 99,
                'active' => true,
                'items' => array(
                    array(
                        'name' => 'Cron',
                        'route' => 'cron-index',
                        'icon' => 'fa fa-gear',
                        'order' => 3,
                        'active' => true
                    )
                )
            )
        )
    ),
    
    // navigation
    'navigation' => array(
        'default' => array(
            array(
                'label' => 'Admin',
                'route' => 'admin-index',
                'useRouteMatch' => true,
                'pages' => array(
                    array(
                        'label' => 'Cron',
                        'route' => 'cron-index',
                        'useRouteMatch' => true,
                        'pages' => array(
                            array(
                                'label' => 'New',
                                'route' => 'cron-create',
                                'useRouteMatch' => true
                            ),
                            array(
                                'label' => 'View',
                                'route' => 'cron-view',
                                'useRouteMatch' => true,
                                'pages' => array(
                                    array(
                                        'label' => 'Delete',
                                        'route' => 'cron-delete',
                                        'useRouteMatch' => true
                                    ),
                                    array(
                                        'label' => 'Edit',
                                        'route' => 'cron-update',
                                        'useRouteMatch' => true
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);