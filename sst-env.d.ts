/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    LIGMAS3: {
      name: string
      type: "sst.aws.Bucket"
    }
  }
}
export {}