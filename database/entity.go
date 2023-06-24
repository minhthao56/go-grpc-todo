package database

type Entity interface {
	FieldMap() ([]string, []interface{})
	TableName() string
}

// GetFieldNames returns all field names from entity e.
func GetFieldNames(e Entity) []string {
	fieldName, _ := e.FieldMap()
	return fieldName
}

func GetScanFields(e Entity, reqlist []string) []interface{} {
	allNames, allValues := e.FieldMap()

	// Allocate enough capacity for result slice
	n := len(allValues)
	if len(reqlist) < n {
		n = len(reqlist)
	}

	result := make([]interface{}, 0, n)
	for _, reqname := range reqlist {
		for i, name := range allNames {
			if name == reqname {
				result = append(result, allValues[i])
				break
			}
		}
	}

	return result
}
