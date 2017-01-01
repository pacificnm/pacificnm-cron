<?php
namespace Pacificnm\Cron\Mapper;

use Zend\Db\Adapter\AdapterInterface;
use Zend\Db\Sql\Update;
use Zend\Db\Sql\Insert;
use Zend\Db\Sql\Delete;
use Zend\Hydrator\HydratorInterface;
use Application\Mapper\AbstractMysqlMapper;
use Pacificnm\Cron\Entity\Entity;

class MysqlMapper extends AbstractMysqlMapper implements MysqlMapperInterface
{

    /**
     *
     * @param AdapterInterface $readAdapter            
     * @param AdapterInterface $writeAdapter            
     * @param HydratorInterface $hydrator            
     * @param Entity $prototype            
     */
    public function __construct(AdapterInterface $readAdapter, AdapterInterface $writeAdapter, HydratorInterface $hydrator, Entity $prototype)
    {
        $this->hydrator = $hydrator;
        
        $this->prototype = $prototype;
        
        parent::__construct($readAdapter, $writeAdapter);
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Pacificnm\Cron\Mapper\MysqlMapperInterface::getAll()
     */
    public function getAll($filter)
    {
        $this->select = $this->readSql->select('cron');
        
        $this->filter($filter);
        
        return $this->getPaginator();
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Pacificnm\Cron\Mapper\MysqlMapperInterface::get()
     */
    public function get($id)
    {
        $this->select = $this->readSql->select('cron');
        
        $this->select->where(array(
            'cron.cron_id = ?' => $id
        ));
        
        return $this->getRow();
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Pacificnm\Cron\Mapper\MysqlMapperInterface::getRunOnce()
     */
    public function getRunOnce()
    {
        $this->select = $this->readSql->select('cron');
        
        $this->select->where(array(
            'cron.cron_run_once = ?' => 1
        ));
        
        $this->select->where(array(
            'cron.cron_enabled = ?' => 1
        ));
        
        return $this->getRows();
    }

    /**
     *
     * @param unknown $minute            
     * @param unknown $hour            
     * @param unknown $day            
     * @param unknown $mon            
     * @param unknown $dow            
     * @return \Zend\Db\ResultSet\ResultSet
     */
    public function getByTime($minute, $hour, $day, $mon, $dow)
    {
        $this->select = $this->readSql->select('cron');
        
        if ($minute) {
            $this->select->where(array(
                'cron.cron_minute = ?' => $minute
            ));
        }
        
        if ($hour) {
            $this->select->where(array(
                'cron.cron_hour = ?' => $hour
            ));
        }
        
        if ($day) {
            $this->select->where(array(
                'cron.cron_dom = ?' => $day
            ));
        }
        
        if ($mon) {
            $this->select->where(array(
                'cron.cron_month = ?' => $mon
            ));
        }
        
        $this->select->where(array(
            'cron.cron_enabled = ?' => 1
        ));
        
        return $this->getRows();
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Pacificnm\Cron\Mapper\MysqlMapperInterface::save()
     */
    public function save(Entity $entity)
    {
        $postData = $this->hydrator->extract($entity);
        
        // if we have id then its an update
        if ($entity->getCronId()) {
            $this->update = new Update('cron');
            
            $this->update->set($postData);
            
            $this->update->where(array(
                'cron.cron_id = ?' => $entity->getCronId()
            ));
            
            $this->updateRow();
        } else {
            $this->insert = new Insert('cron');
            
            $this->insert->values($postData);
            
            $id = $this->createRow();
            
            $entity->setCronId($id);
        }
        
        return $this->get($entity->getCronId());
    }

    /**
     *
     * {@inheritdoc}
     *
     * @see \Pacificnm\Cron\Mapper\MysqlMapperInterface::delete()
     */
    public function delete(Entity $entity)
    {
        $this->delete = new Delete('cron');
        
        $this->delete->where(array(
            'cron.cron_id = ?' => $entity->getCronId()
        ));
        
        return $this->deleteRow();
    }

    /**
     *
     * @param array $filter            
     * @return \Pacificnm\Cron\Mapper\MysqlMapper
     */
    public function filter($filter)
    {
        // enabled
        if (array_key_exists('cron_enabled', $filter)) {
            $this->select->where(array(
                'cron.cron_enabled = ?' => 1
            ));
        }
        
        // status
        if (array_key_exists('cronStatus', $filter)) {
            $this->select->where(array(
                'cron.cron_status = ?' => $filter['cronStatus']
            ));
        }
        
        return $this;
    }
}
