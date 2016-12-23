<?php
namespace Cron\Controller;

use Application\Controller\AbstractApplicationController;
use Cron\Service\ServiceInterface;
use Zend\View\Model\ViewModel;

class DeleteController extends AbstractApplicationController
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
    
    public function indexAction()
    {
        parent::indexAction();
        
        $request = $this->getRequest();
        
        $id = $this->params()->fromRoute('id');
        
        $entity = $this->service->get($id);
        
        if (! $entity) {
            $this->flashmessenger()->addErrorMessage('Object was not found.');
            return $this->redirect()->toRoute('cron-index');
        }
        
        if ($request->isPost()) {
        
            $del = $request->getPost('delete_confirmation', 'no');
        
            if ($del === 'yes') {
        
                $this->service->delete($entity);
        
                $this->getEventManager()->trigger('cronDelete', $this, array(
                    'authId' => $this->identity() ->getAuthId(),
                    'historyUrl' => $this->getRequest()->getUri(),
                    'cronEntity' => $entity
                ));
        
                $this->flashmessenger()->addSuccessMessage('Object was deleted');
        
                return $this->redirect()->toRoute('cron-index');
            }
        
            return $this->redirect()->toRoute('cron-view', array(
                'id' => $id
            ));
        }
        
        return new ViewModel(array(
            'entity' => $entity
        ));
    }
}