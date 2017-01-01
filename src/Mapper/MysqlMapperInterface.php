<?php
namespace Pacificnm\Cron\Mapper;

use Pacificnm\Cron\Entity\Entity;

interface MysqlMapperInterface
{

    /**
     * 
     * @param array $filter
     * @return Entity
     */
    public function getAll($filter);

    /**
     * 
     * @param number $id
     * @return Entity
     */
    public function get($id);

    /**
     * @return Entity
     */
    public function getRunOnce();
    
    /**
     * 
     * @param number $minute <minute>
     * @param number $hour <hour>
     * @param number $day <day>
     * @param number $mon  <month>
     * @param number $dow <day of week>
     * 
     * @return Entity
     */
    public function getByTime($minute, $hour, $day, $mon, $dow);
    
    
    
    /**
     * 
     * @param Entity $entity
     * @return Entity
     */
    public function save(Entity $entity);

    /**
     * 
     * @param Entity $entity
     * @return bool
     */
    public function delete(Entity $entity);
}