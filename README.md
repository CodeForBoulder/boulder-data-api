# Boulder Data Api

## ARCHIVE UPDATE

This project lost traction and will be archived. If you find this and wish to pick it up, please [join us](http://www.codeforboulder.org/) and consider [resubmitting a proposal](http://www.codeforboulder.org/project-proposals).

### Api Docs
Base uri for Boulder's ckan instance: `https://opendata.bouldercolorado.gov/api/3/action`

#### Get requests

`site_read`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/site_read`
  - returns: `Bool`
  - further reading: `link`

`package_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/package_list`

`current_package_list_with_resources`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/current_package_list_with_resources`

`revision_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/revision_list`

`package_revision_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/package_revision_list`

`member_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/member_list`

`group_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/group_list`

`organization_list`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/organization_list`

`group_list_authz`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/group_list_authz`

`organization_list_for_user`
- example: `curl -X GET https://opendata.bouldercolorado.gov/api/3/action/organization_list_for_user`

