import { api, body, endpoint, pathParams, request, response, String, securityHeader } from "@airtasker/spot";

@api({ name: "Pocket Pets API", version: "0.4.2" })
class Api {
  @securityHeader
  "Authorization": string
}

@endpoint({
  method: "POST",
  path: "/users"
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
  path: "/user/:uuid"
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

interface CreateUserRequest {
  firstName: String;
  lastName: String;
}

interface CreateUserResponse {
  firstName: String;
  lastName: String;
  role: String;
}

type Uuid = string;
