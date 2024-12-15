import PropTypes from 'prop-types';

const InputField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="flex flex-col mb-4">
    <label className="text-gray-600 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func, // Fixed type for callback
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
