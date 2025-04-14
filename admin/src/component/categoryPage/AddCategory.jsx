import React, { useCallback, useMemo } from 'react';
import CustomInput from '../common/customField/CustomInput';
import RichTextEditor from '../common/RichTextEditor';
import CustomSelect from '../common/customField/CustomSelect';
import { Categoryvalidation } from './validation/CategoryValidation';
import CustomBannerInput from '../common/customField/CustomTextarea';
import { useFormik } from 'formik';
import CustomMultiSelect from '../common/CustomMultiSelect';

const MemoizedSelect = React.memo(CustomSelect);
const MemoizedMultiSelect = React.memo(CustomMultiSelect);
const MemoizedBannerInput = React.memo(CustomBannerInput);
const MemoizedRichTextEditor = React.memo(RichTextEditor);

const AddCategory = () => {
  const parentCategoryOptions = useMemo(() => [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Books', value: 'books' },
    { label: 'Clothing', value: 'clothing' },
  ], []);

  const statusOptions = useMemo(() => [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ], []);

  const formik = useFormik({
    initialValues: {
      category_name: '',
      category_url: '',
      meta_title: '',
      meta_keywords: '',
      meta_description: '',
      editor: '',
      parent_category: [],
      status: '',
      category_image: null,
    },
    validationSchema: Categoryvalidation,
    onSubmit: (values) => {
      console.log('submited', values);
    },
  });

  const handleEditorChange = useCallback(
    (val) => formik.setFieldValue('editor', val),
    [formik.setFieldValue]
  );

  const handleBannerChange = useCallback(
    (e) => formik.setFieldValue('category_image', e.currentTarget.files[0]),
    [formik.setFieldValue]
  );

  return (
    <div>
      <div className="lg:w-[1210px] max-h-full py-5 shadow-sm px-4 mb-4 rounded-sm flex items-center justify-center lg:justify-start">
        <h1 className="text-2xl font-bold">Add Category</h1>
      </div>
      <div className="lg:w-[1210px] min-h-90 py-5 shadow-sm px-4 mb-4 rounded-sm">
        <div>
          <form className="lg:flex items-center flex-wrap" onSubmit={formik.handleSubmit}>
            <CustomInput
              label="Category Name"
              type="text"
              placeholder="Enter category name"
              name="category_name"
              value={formik.values.category_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.category_name && formik.errors.category_name}
            />
            <CustomInput
              label="Category Url"
              type="text"
              placeholder="Enter Category url"
              name="category_url"
              value={formik.values.category_url}
              onBlur={formik.handleBlur}
              error={formik.touched.category_url && formik.errors.category_url}
              onChange={formik.handleChange}
            />
            <CustomInput
              label="Meta Title"
              type="text"
              placeholder="Enter meta title"
              name="meta_title"
              value={formik.values.meta_title}
              onBlur={formik.handleBlur}
              error={formik.touched.meta_title && formik.errors.meta_title}
              onChange={formik.handleChange}
            />
            <CustomInput
              label="Meta Keywords"
              type="text"
              placeholder="Enter meta keywords"
              name="meta_keywords"
              value={formik.values.meta_keywords}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.meta_keywords && formik.errors.meta_keywords}
            />
            <CustomInput
              label="Meta Description"
              type="text"
              placeholder="Enter category name"
              name="meta_description"
              value={formik.values.meta_description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.meta_description && formik.errors.meta_description}
            />
            <MemoizedSelect
              label="Status"
              name="status"
              options={statusOptions}
              onChange={formik.handleChange}
              value={formik.values.status}
              onBlur={formik.handleBlur}
              error={formik.touched.status && formik.errors.status}
            />
            <MemoizedMultiSelect
              label="Parent Category"
              name="parent_category"
              options={parentCategoryOptions}
              displayValue="label"
              selectedValues={formik.values.parent_category}
              setFieldValue={formik.setFieldValue}
              setFieldTouched={formik.setFieldTouched}
              placeholder="Select Parent Category"
              error={formik.touched.parent_category && formik.errors.parent_category}
            />
            <MemoizedBannerInput
              label="Banner"
              type="file"
              name="category_image"
              placeholder="Enter banner content"
              onBlur={formik.handleBlur}
              onChange={handleBannerChange}
              error={formik.touched.category_image && formik.errors.category_image}
            />
            <MemoizedRichTextEditor
              label="Category Description"
              value={formik.values.editor}
              onBlur={() => formik.setFieldTouched('editor', true)}
              onChange={handleEditorChange}
              error={formik.touched.editor && formik.errors.editor}
            />

            <div className="w-full lg:flex justify-end mt-4 ms-4 lg:mx-1">
              <button
                type="submit"
                className="border-2 px-8 lg:px-6 py-2 text-xl rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
