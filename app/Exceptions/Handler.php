<?php

namespace App\Exceptions;

use App\Traits\ApiResponsive;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Response;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Exception\SuspiciousOperationException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class Handler extends ExceptionHandler
{
    use ApiResponsive;

    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Exception $exception)
    {
        return $this->handle($exception);
    }

    private function handle(Exception $exception)
    {
        $exception = $this->prepareException($exception);

        return $this->genericResponse($exception);
    }

    protected function prepareException(Exception $exception)
    {
        if ($exception instanceof ModelNotFoundException || $exception instanceof SuspiciousOperationException) {
            $exception = new NotFoundHttpException(__('http_errors.404'), $exception);
        }

        if ($exception instanceof AuthorizationException) {
            $exception = new AccessDeniedHttpException(__('http_errors.403'), $exception);
        }

        if ($exception instanceof TokenMismatchException) {
            $exception = new HttpException(419, __('http_errors.419'), $exception);
        }

        return $exception;
    }

    private function genericResponse(Exception $exception)
    {
        return $this->responseError('',
            $this->convertExceptionToArray($exception),
            $this->getHeaders($exception),
            $this->getStatusCode($exception));
    }

    protected function convertExceptionToArray(Exception $exception) : array
    {
        $responses['code'] = $exception instanceof ApiErrorException ? $exception->getApiCode() : $exception->getCode();

        $statusCode = $this->getStatusCode($exception);

        $responses['message'] = $exception->getMessage() ?: sprintf("%d - %s", $statusCode, __("http_errors.$statusCode"));

        if ($exception instanceof ValidationException) {
            $responses['errors'] = $exception->errors();
        }

        if ($this->isRunningInDebugMode()) {
            $responses['debug'] = $this->buildDebugLog($exception);
        }

        return $responses;
    }

    private function isRunningInDebugMode() : bool
    {
        return config('app.debug');
    }

    private function buildDebugLog(Exception $exception)
    {
        $debugLogs = [
            'message' => $exception->getMessage(),
            'exception' => get_class($exception),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'trace' => explode("\n", $exception->getTraceAsString()),
        ];

        if ($exception->getPrevious()) {
            $debugLogs['trace'] = [
                'current' => explode("\n", $exception->getTraceAsString()),
                'previous' => explode("\n", $exception->getPrevious()->getTraceAsString())
            ];
        }

        return $debugLogs;
    }

    private function getHeaders(Exception $exception) : array
    {
        return $exception instanceof HttpExceptionInterface ? $exception->getHeaders() : [];
    }

    private function getStatusCode(Exception $exception) : int
    {
        if ($exception instanceof ValidationException) {
            return $exception->status;
        }

        if ($exception instanceof AuthenticationException) {
            return Response::HTTP_UNAUTHORIZED;
        }

        return $exception instanceof HttpExceptionInterface ? $exception->getStatusCode() : Response::HTTP_NOT_FOUND;
    }
}
