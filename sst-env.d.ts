/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    LIGMAEmail: {
      sender: string
      type: "sst.aws.Email"
    }
    LIGMAS3: {
      name: string
      type: "sst.aws.Bucket"
    }
  }
}
export {}