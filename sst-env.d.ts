/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    LIGMAdb: {
      clusterArn: string
      database: string
      secretArn: string
      type: "sst.aws.Postgres"
    }
  }
}
export {}