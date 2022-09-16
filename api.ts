import { api, body, endpoint, pathParams, request, response, String, securityHeader, config, queryParams } from "@airtasker/spot";

/**
 * My really cool API
 * Look upon it, ye mighty, and despair
 */
@api({ name: "Pocket Pets API", version: "0.4.2" })
@config({
  paramSerializationStrategy: {
    query: {
      array: "comma"
    }
  }
})
class Api {
  @securityHeader
  "Authorization": string
}

/**
 * Created a new user
 * @example
 * wahhahaha
 */
@endpoint({
  method: "POST",
  path: "/users",
  tags: ["USER", "TENANT"]
})
class CreateUser {
  @request
  request(
    @body body: CreateUserRequest
  ) { }

  @response({ status: 201 })
  successfulResponse(
    @body body: CreateUserResponse
  ) { }
}

@endpoint({
  method: "DELETE",
  path: "/user/:uuid",
  tags: ["USER"]
})
class DeleteUser {
  @request
  request(
    @pathParams
    pathParams: {
      uuid: Uuid
    }
  ) { }

  @response({ status: 200 })
  successfulResponse(
    @body body: CreateUserResponse
  ) { }
}

@endpoint({
  method: "GET",
  path: "/user/:uuid",
  tags: ["USER"]
})
class FindUser {
  @request
  request(
    @pathParams
    pathParams: {
      uuid: Uuid
    },
    @queryParams
    queryParams: {
      /**
       * @schemaprop example
       * ["name", "number", "address"]
       */
      extend: UserFields[]
    }
  ) { }

  @response({ status: 200 })
  successfulResponse(
    @body body: CreateUserResponse
  ) { }
}


/**
 * Some Interface Documentation
 * @example
 * {firstName: "Abhemanyu", lastName: "Sarin"}
 */
interface CreateUserRequest {
  /** First name of user
   * @default
   * "Abhemanyu"
   */
  firstName: String;
  /** Last name of user */
  lastName: String;
}


/**
 * Some Interface Documentation
 */
interface CreateUserResponse {
  firstName: String;
  lastName: String;
  role: String;
}

/**
 * A MongoDB Object ID
 */
type Uuid = string;

type UserFields = "One" | "Two" | "Three"