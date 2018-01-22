import React from 'react';
import { List, InputItem, DatePicker, TextareaItem } from 'antd-mobile';
import { isEmpty } from 'lodash';

const Item = List.Item;

const Field = (props) => {
	const { item, form } = props;
  	const { getFieldProps } = form;
	const type = props.item.column_type

	switch(type){
		case 'text':
			return (<InputItem
			            {...getFieldProps(item.column_field, {
			              initialValue: item.column_values,
			            })}
			          >
			          {item.column_name}
			        </InputItem>
			        );
			break;
		case 'select':
			return (<Item
			            extra={
			            <select {...getFieldProps(item.column_field, {
				          initialValue: item.column_values,
				        })}>{item.options.map((item, i) =><option key={i} value={item.field_value}>{item.field_label}</option>)}</select>}
			            arrow="horizontal"
			        >
			        	{item.column_name}
			        </Item>
			        );
			break;
		case 'date':
			const dateParam = new Date(item.column_values)
			return (
					<DatePicker
				        {...getFieldProps(item.column_field, {
				          initialValue: dateParam,
				        })}
				        mode="date"
				        title={"选择日期"}

				    >
			        	<Item arrow="horizontal">{item.column_name}</Item>
			      	</DatePicker>
				);
			break;
		case 'textarea':
			return (
					<TextareaItem
						{...getFieldProps(item.column_field, {initialValue:item.column_values})}
						title="文本域"
						placeholder="displayed clear while typing"
						autoHeight
						labelNumber={5}
					/>
				)
		default:
			return "";

	}
}



const FormItem = (props) => {
  const { form, fieldData } = props;
  const { getFieldProps } = form;
  return (
    <div>
    	{!isEmpty(fieldData) ? fieldData.map((item, i) =><Field key={i} item={item} form={form}/>) : null}
    	{/*<InputItem
            {...getFieldProps('bankCard2', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >
          银行卡
        </InputItem>
        <DatePicker
	        {...getFieldProps('keyValue', {
	          initialValue: new Date('2017-11-11'),
	        })}
	        mode="date"
	        title="选择日期"
	    >
        	<Item arrow="horizontal">时间</Item>
      	</DatePicker>
        <Item
            extra={<select {...getFieldProps('keyValue2', {
	          initialValue: '111',
	        })}><option value="111">我是你你是我编码加快分解</option><option value="22">222</option></select>}
            arrow="horizontal"
            onClick={() => {}}
        >
        	My wallet
        </Item>
        <TextareaItem
			{...getFieldProps('note3')}
			title="高度自适应"
			placeholder="displayed clear while typing"
			autoHeight
			labelNumber={5}
		/>
		<Item
            extra={<InputItem type="file" {...getFieldProps('keyValue3',{})}></InputItem>}
            arrow="horizontal"
            onClick={() => {}}
        >
        	文件上传
        </Item>*/}
    </div>
  )
}

export default FormItem;