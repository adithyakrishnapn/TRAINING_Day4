import unittest

from field_validation import validate_required_fields


class ValidateRequiredFieldsTests(unittest.TestCase):
    def test_valid_payload(self):
        result = validate_required_fields(
            {"name": "Asha", "email": "asha@example.com"},
            ["name", "email"],
        )

        self.assertTrue(result["is_valid"])
        self.assertEqual(result["missing_fields"], [])

    def test_marks_missing_and_empty_fields(self):
        result = validate_required_fields(
            {"name": " ", "email": None},
            ["name", "email", "age"],
        )

        self.assertFalse(result["is_valid"])
        self.assertEqual(result["missing_fields"], ["name", "email", "age"])


if __name__ == "__main__":
    unittest.main()
