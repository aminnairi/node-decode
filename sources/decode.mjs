const getType = (target) => {
  return Object.prototype.toString.call(target).replace("[object ", "").replace("]", "").toLowerCase();
};

export const decode = (schema, data) => {
  const schemaType = getType(schema);
  const dataType = getType(data);

  if (schemaType === "undefined") {
    throw new Error("schema is missing in decode(schema, data)");
  }

  if (schemaType === "array") {
    if (schema.length !== 1) {
      return false;
    }

    if (dataType !== "array") {
      return false;
    }

    if (data.some(item => !decode(schema[0], item))) {
      return false;
    }

    return true;
  }

  if (schemaType === "object") {
    if (dataType !== "object") {
      return false;
    }

    if (Object.entries(schema).some(([schemaKey, schemaValue]) => !decode(schemaValue, data[schemaKey]))) {
      return false;
    }

    return true;
  }

  if (schemaType !== "string") {
    throw new TypeError(`schema is neither a string, an array or an object in decode(schema, data), ${schemaType} provided`);
  }

  return schema === getType(data);
};
