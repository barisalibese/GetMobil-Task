<?php


namespace App\Libraries;


use Illuminate\Database\Eloquent\Model;
use InvalidArgumentException;

class Response
{
    const COMPLETE = 'complete';
    const FAILED = 'failed';


    protected $_status;
    /**
     * @var string
     */
    protected $_message;
    /**
     * @var array
     */
    protected $_body = [];

    /**
     * @var bool this enable/disable the status code check on construct
     */
    protected bool $statusCheck = true;


    public function __construct($status, $message = null, $body = [])
    {
        if ($this->statusCheck) {
            if (!in_array($status,
                array(self::FAILED, self::COMPLETE))) {
                throw new InvalidArgumentException('invalid status');
            }
        }


        $this->_status = $status;
        $this->_message = $message;
        $this->_body = $body;
    }

    /**
     * @return bool
     */
    public function success(): bool
    {
        return $this->_status === self::COMPLETE;
    }

    /**
     * @return string|null
     */
    public function getStatus(): string
    {
        return $this->_status;
    }

    /**
     * @return string|null
     */
    public function getMessage()
    {
        return $this->_message;
    }

    /**
     * @return mixed|Model
     */
    public function getBody()
    {
        return $this->_body;
    }

    public function setBody($key,$value)
    {
        $this->_body[$key] = $value ;
    }

    /**
     * this converts the status to universal status code
     * @return int
     */
    public function getResponseStatus()
    {
        switch ($this->_status) {
            case self::COMPLETE:
                return ApiResponse::HTTP_OK;
            case self::FAILED:
                return ApiResponse::HTTP_BAD_REQUEST;
        }
        return null; // it is for customize your response conditions
    }
}
