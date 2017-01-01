<?php
namespace Pacificnm\Cron\Controller;

use Zend\View\Model\ViewModel;
use Pacificnm\Cron\Service\ServiceInterface;
use Pacificnm\Cron\Form\Form;
use Pacificnm\Controller\AbstractApplicationController;

class CreateController extends AbstractApplicationController
{
    /**
     * 
     * @var CronServiceInterface
     */
    protected $service;
    
    /**
     * 
     * @var CronForm
     */
    protected $form;
    
    /**
     * 
     * @param CronServiceInterface $cronService
     * @param CronForm $form
     */
    public function __construct(ServiceInterface $service, Form $form)
    {
        $this->service = $service;
        
        $this->form = $form;
    }
    
    /**
     * 
     * {@inheritDoc}
     * @see \Pacificnm\Controller\AbstractApplicationController::indexAction()
     */
    public function indexAction()
    {
        parent::indexAction();
        
        $request = $this->getRequest();
        
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
                    'requestUrl' => $this->getRequest()->getUri(),
                    'cronEntity' => $cronEntity,
                ));
                
                $this->flashMessenger()->addSuccessMessage('Object was saved');
                
                return $this->redirect()->toRoute('cron-index');
            }
        }
        
        $this->form->get('cronStatus')->setValue(0);
        
        return new ViewModel(array(
            'form' => $this->form
        ));
    }
}
