/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Courier from "../../..";
import urlJoin from "url-join";
import * as errors from "../../../../errors";

export declare namespace Bulk {
    interface Options {
        environment?: core.Supplier<environments.CourierEnvironment | string>;
        authorizationToken: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }

    interface IdempotentRequestOptions extends RequestOptions {
        idempotencyKey?: string | undefined;
        idempotencyExpiry?: number | undefined;
    }
}

export class Bulk {
    constructor(protected readonly _options: Bulk.Options) {}

    /**
     * @throws {@link Courier.BadRequestError}
     */
    public async create(
        request: Courier.BulkCreateJobParams,
        requestOptions?: Bulk.IdempotentRequestOptions
    ): Promise<Courier.BulkCreateJobResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                "/bulk"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.0.1",
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null
                        ? requestOptions?.idempotencyExpiry.toString()
                        : undefined,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.BulkCreateJobResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Ingest user data into a Bulk Job
     */
    public async ingestUsers(
        jobId: string,
        request: Courier.BulkIngestUsersParams,
        requestOptions?: Bulk.IdempotentRequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/bulk/${jobId}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.0.1",
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null
                        ? requestOptions?.idempotencyExpiry.toString()
                        : undefined,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CourierError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Run a bulk job
     * @throws {@link Courier.BadRequestError}
     */
    public async runJob(
        jobId: string,
        request: Courier.BulkRunJobParams,
        requestOptions?: Bulk.IdempotentRequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/bulk/${jobId}/run`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.0.1",
                "Idempotency-Key": requestOptions?.idempotencyKey != null ? requestOptions?.idempotencyKey : undefined,
                "X-Idempotency-Expiration":
                    requestOptions?.idempotencyExpiry != null
                        ? requestOptions?.idempotencyExpiry.toString()
                        : undefined,
            },
            contentType: "application/json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a bulk job
     * @throws {@link Courier.BadRequestError}
     */
    public async getJob(jobId: string, requestOptions?: Bulk.RequestOptions): Promise<Courier.BulkGetJobResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/bulk/${jobId}/run`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.BulkGetJobResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get Bulk Job Users
     * @throws {@link Courier.BadRequestError}
     */
    public async getUsers(
        jobId: string,
        requestOptions?: Bulk.RequestOptions
    ): Promise<Courier.BulkGetJobUsersResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CourierEnvironment.Production,
                `/bulk/${jobId}/users`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@trycourier/courier",
                "X-Fern-SDK-Version": "6.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return _response.body as Courier.BulkGetJobUsersResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Courier.BadRequestError(_response.error.body as Courier.BadRequest);
                default:
                    throw new errors.CourierError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CourierError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CourierTimeoutError();
            case "unknown":
                throw new errors.CourierError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const bearer = (await core.Supplier.get(this._options.authorizationToken)) ?? process.env["COURIER_AUTH_TOKEN"];
        if (bearer == null) {
            throw new errors.CourierError({
                message: "Please specify COURIER_AUTH_TOKEN when instantiating the client.",
            });
        }

        return `Bearer ${bearer}`;
    }
}
