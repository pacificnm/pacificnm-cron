<?php
namespace Cron\Controller;

use Application\Controller\AbstractApplicationController;
use Zend\View\Model\ViewModel;
use Cron\Service\ServiceInterface;
use Cron\Form\Form;


class UpdateController extends AbstractApplicationController
{
    /**
    *
    * @var CronServiceInterface
    */
    protected $service;
    
    /**
     *
     * @var Form
     */
    protected $form;
    
    /**
     * 
     * @param ServiceInterface $service
     * @param Form $form
     */
    public function __construct(ServiceInterface $service, Form $form)
    {
        $this->service = $service;
    
        $this->form = $form;
    }
    
    /**
     * 
     * {@inheritDoc}
     * @see \Zend\Mvc\Controller\AbstractActionController::indexAction()
     */
    public function indexAction()
    {
        parent::indexAction();
        
        $request = $this->getRequest();
    
        $id = $this->params('id');
        
        $entity = $this->service->get($id);
        
        if(! $entity) {
            $this->flashMessenger()->addErrorMessage('Object not found');           
            return $this->redirect()->toRoute('cron-index');
        }
        
        // if we have a post
        if ($request->isPost()) {
    
            $postData = $request->getPost();
    
            $this->form->setData($postData);
    
            // if the form is valid
            if ($this->form->isValid()) {
                $entity = $this->form->getData();
    
                $cronEntity = $this->service->save($entity);
    
                // trigger event
                $this->getEventManager()->trigger('cronCreate', $this, array(
                    'authId' => $this->identity()->getAuthId(),
                    'historyUrl' => $this->getRequest()->getUri(),
                    'cronEntity' => $cronEntity,
                ));
    
                $this->flashMessenger()->addSuccessMessage('Object was saved');
    
                return $this->redirect()->toRoute('cron-view', array('id' => $cronEntity->getCronId()));
            }
        }
    
        $this->form->bind($entity);
        
        return new ViewModel(array(
            'form' => $this->form
        ));
    }
}

?>