"""Helpers for validating required fields in dictionary-like payloads."""


def validate_required_fields(payload, required_fields):
    """
    Validate required fields in `payload`.

    Returns a mapping where:
      - "is_valid" is True when every required field is present and non-empty.
      - "missing_fields" lists required fields that failed validation.
    """
    missing_fields = []

    for field in required_fields:
        if field not in payload:
            missing_fields.append(field)
            continue

        value = payload[field]
        if value is None:
            missing_fields.append(field)
            continue

        if isinstance(value, str) and value.strip() == "":
            missing_fields.append(field)

    return {
        "is_valid": len(missing_fields) == 0,
        "missing_fields": missing_fields,
    }
