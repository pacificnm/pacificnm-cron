<?php
namespace Pacificnm\Cron\Controller;

use Zend\View\Model\ViewModel;
use Pacificnm\Controller\AbstractApplicationController;
use Pacificnm\Cron\Service\ServiceInterface;

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
     * {@inheritdoc}
     *
     * @see \Pacificnm\Controller\AbstractApplicationController::indexAction()
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
            'authId' => $this->identity()
                ->getAuthId(),
            'requestUrl' => $this->getRequest()
                ->getUri(),
            'cronEntity' => $entity
        ));
        
        return new ViewModel(array(
            'entity' => $entity
        ));
    }
}
