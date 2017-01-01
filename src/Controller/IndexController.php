<?php
namespace Pacificnm\Cron\Controller;

use Zend\View\Model\ViewModel;
use Pacificnm\Controller\AbstractApplicationController;
use Pacificnm\Cron\Service\ServiceInterface;

class IndexController extends AbstractApplicationController
{
    /**
     * 
     * @var ServiceInterface
     */
    protected $service;
    
    /**
     * 
     * @param ServiceInterface $service
     */
    public function __construct(ServiceInterface $service)
    {
        $this->service = $service;
    }
    
    /**
     * 
     * {@inheritDoc}
     * @see \Pacificnm\Controller\AbstractApplicationController::indexAction()
     */
    public function indexAction()
    {
        // trigger event view cron
        $this->getEventManager()->trigger('CronIndex', $this, array(
            'authId' => $this->identity()->getAuthId(),
            'requestUrl' => $this->getRequest()->getUri()
        ));
        
        // set from params
        $filter = array(
            'page' => $this->page,
            'count-per-page' => $this->countPerPage,
        );
        
        // get 
        $paginator = $this->service->getAll($filter);
        
        $paginator->setCurrentPageNumber($filter['page']);
        
        $paginator->setItemCountPerPage($filter['count-per-page']);
        
        // return view
        return new ViewModel(array(
            'paginator' => $paginator,
            'page' => $filter['page'],
            'count-per-page' => $filter['count-per-page'],
            'itemCount' => $paginator->getTotalItemCount(),
            'pageCount' => $paginator->count(),
            'queryParams' => $this->params()->fromQuery(),
            'routeParams' => array()
        ));
    }
}