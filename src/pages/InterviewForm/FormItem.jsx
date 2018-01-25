import React from 'react';
import { List, InputItem, DatePicker, TextareaItem } from 'antd-mobile';
import { isEmpty } from 'lodash';
import './index.less';

const Item = List.Item;

const Field = (props) => {
	const { item, form } = props;
  	const { getFieldProps } = form;
	const type = props.item.column_type

	switch(type){
		case 'text':
			return (<InputItem
						style={{textAlign:'right'}}
			            {...getFieldProps(item.column_alias, {
			              initialValue: item.column_values,
			              rules: [{required: item.is_required, message: `${item.column_name}不可为空`}],
			            })}
			          >
			          {item.column_name}
			        </InputItem>
			        
			        );
		case 'select':
			return (<Item
						style={{textAlign:'right'}}
						className="hq-form-diy-select"
			            extra={
			            <select {...getFieldProps(item.column_alias, {
				          initialValue: item.column_values,
				          rules: [{required: item.is_required, message: `${item.column_name}不可为空`}],
				        })}>{item.options.map((item, i) =><option key={i} value={item.field_value}>{item.field_label}</option>)}</select>}
			            arrow="horizontal"
			        >
			        	{item.column_name}
			        </Item>
			        );
		case 'date':
			const dateParam = item.column_values ? new Date(item.column_values) : new Date();
			return (
					<DatePicker
				        {...getFieldProps(item.column_alias, {
				          initialValue: dateParam,
				          rules: [{required: item.is_required, message: `${item.column_name}不可为空`}],
				        })}
				        mode="date"
				        title={"选择日期"}

				    >
			        	<Item arrow="horizontal">{item.column_name}</Item>
			      	</DatePicker>
				);
		case 'textarea':
			return (
					<TextareaItem
						style={{textAlign:'right'}}
						{...getFieldProps(item.column_alias, {
							initialValue:item.column_values && item.column_values.toString(),
							rules: [{required: item.is_required}]
						})}
						title={item.column_name}
						placeholder=""
						autoHeight
						labelNumber={5}
					/>
				)
		default:
			return "";

	}
}



const FormItem = (props) => {
  // let errors;
  const { form, fieldData } = props;
  // const { getField
  // const { getFieldError } = form;
  // const errorCollect = function() {
  // 	if(!isEmpty(fieldData)) {
  // 		const aaa = fieldData.map((item, i) =>{return (errors = getFieldError(item.column_alias)) ? errors.join(',') : null})
  // 		return <span>{aaa[0]}</span>
  // 	}

  // }
  return (
    <div className="hq-form-item-field">
    	{!isEmpty(fieldData) ? fieldData.map((item, i) =><Field key={i} item={item} form={form}/>) : null}
    	{/*{errorCollect()}*/}
    </div>
  )
}

export default FormItem;