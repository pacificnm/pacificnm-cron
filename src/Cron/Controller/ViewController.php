<?php
namespace Cron\Controller;

use Application\Controller\AbstractApplicationController;
use Cron\Service\ServiceInterface;
use Zend\View\Model\ViewModel;

class ViewController extends AbstractApplicationController
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
     * @see \Application\Controller\AbstractApplicationController::indexAction()
     */
    public function indexAction()
    {
        parent::indexAction();
        
        $id = $this->params()->fromRoute('id');
        
        $entity = $this->service->get($id);
        
        if (! $entity) {
            $this->flashMessenger()->addErrorMessage('Object was not found');
            return $this->redirect()->toRoute('cron-index');
        }
        
        $this->getEventManager()->trigger('cronView', $this, array(
            'authId' => $this->identity()->getAuthId(),
            'historyUrl' => $this->getRequest()->getUri(),
            'cronEntity' => $entity
        ));
        
        return new ViewModel(array(
            'entity' => $entity
        ));
    }
}
