#define NAPI_VERSION 6

#include <node_api.h>
#include <signal.h>
#include <stdio.h>

napi_value Segfaultify(napi_env env, napi_callback_info info) {
  int* data;

  napi_get_instance_data(env, (void**) &data);

  *data = 1234;

  return NULL;
}

napi_value Init(napi_env env, napi_value exports) {
  napi_value segfaultify;

  napi_create_function(env, NULL, 0, Segfaultify, NULL, &segfaultify);
  napi_set_named_property(env, exports, "segfaultify", segfaultify);

  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init);
