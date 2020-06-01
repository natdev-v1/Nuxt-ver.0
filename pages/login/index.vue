<template>
  <div class="container-login">
    <div class="card-login">
      <div class="card-content">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item
            :validate-status="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
          >
            <a-input
              v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item
            :validate-status="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
          >
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item style="text-align: center;">
            <a-button
              type="primary"
              style="width:100%"
              html-type="submit"
              :disabled="hasErrors(form.getFieldsError())"
            >Log in</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
    <div class="login-footer">
      <h3>@Power By Mr.Smile Jogging</h3>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" })
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("username") && getFieldError("username");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          try {
            this.$toast.show("Logging in...");
            let response = await this.$auth.loginWith("local", {
              data: values
            });
            this.$toast.success("Successfully authenticated");
            console.log(response);
          } catch (err) {
            console.log(err);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
.card-login {
  width: 600px;
  height: 600px;
  border-radius: 1%;
  border: 2px solid #fff;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  -webkit-box-shadow: 0px 0px 17px -1px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 17px -1px rgba(0, 0, 0, 0.64);
  box-shadow: 0px 0px 17px -1px rgba(0, 0, 0, 0.64);
}

.container-login {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(1, 190, 241);
  background: linear-gradient(
    90deg,
    rgba(1, 190, 241, 1) 0%,
    rgba(2, 162, 222, 1) 17%,
    rgba(5, 154, 221, 1) 45%,
    rgba(1, 199, 247, 1) 71%,
    rgba(2, 162, 222, 1) 95%
  );
}
.card-content {
  flex-grow: 1;
  padding: 5%;
}
.login-footer {
  position: absolute;
  bottom: 0;
  & h3 {
    color: #fff;
  }
}
.ant-input {
  height: 45px;
}
</style>