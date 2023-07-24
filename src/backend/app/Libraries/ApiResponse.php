<?php


namespace App\Libraries;


use Illuminate\Http\JsonResponse;

class ApiResponse extends JsonResponse
{
    protected      $body       = [];
    public function __construct($data = null, $status = 200, $headers = [], $options = 0)
    {
        parent::__construct($data, $status, $headers, $options);
    }

    public function setResponse(Response $response): ApiResponse
    {
        return $this->setStatusCode($response->success() ? self::HTTP_OK : self::HTTP_BAD_REQUEST)
            ->setMessage($response->getMessage())
            ->setBody($response->getBody());
    }

    public function setMessage(?string $responseMessage): ApiResponse
    {
        $this->body['message'] = $responseMessage;
        return $this;
    }

    protected function getStatusText(): string
    {
        return self::$statusTexts[$this->getStatusCode()];
    }

    public function setBody($data = []): ApiResponse
    {
        $this->body['data'] = $data;
        return $this;
    }

    public function send():static
    {
        $this->body = array_merge([
            'code'   => $this->getStatusCode(),
            'status' => $this->getStatusText(),
        ], $this->body);
        $this->setData($this->body);
        return parent::send();
    }
}
