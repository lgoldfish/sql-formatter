import React, { useState, useEffect } from 'react';
import sqlFormatter from 'sql-formatter';
import { Button, Row, Col } from 'antd';
import brace from 'brace';
import 'brace/theme/sqlserver';
import 'brace/mode/mysql';

import AceEditor from 'react-ace';


const handleOnload = (e) => {
  // console.log('load', e);
};
const IndexPage = () => {
  const [formatSql, setFormatSql] = useState('');
  const [beforeSql, setBeforeSql] = useState('');
  const handleFormatSql = () => {
    const newFormatSql = sqlFormatter.format(beforeSql);
    setFormatSql(newFormatSql);
  };
  const handleEditorChange = (value) => {
    setBeforeSql(value);
  };
  return (
    <div className="sql-formatter">
      <Button type="primary" style={{ textAlign: 'center', margin: '0 auto 20px', display: 'block' }} onClick={handleFormatSql}>格式化SQL</Button>
      <Row type="flex" justify="space-around">
        <Col className="editorContainer" span={11}>
          <AceEditor
            mode="mysql"
            theme="sqlserver"
            name="blah2"
            onLoad={handleOnload}
            onChange={handleEditorChange}
            fontSize={14}
            height="1000px"
            showPrintMargin
            showGutter
            highlightActiveLine
            value={beforeSql}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />

        </Col>
        <Col className="editorContainer" span={11}>
          <AceEditor
            mode="mysql"
            theme="sqlserver"
            name="blah3"
            height="1000px"
            onLoad={handleOnload}
            onChange={handleEditorChange}
            fontSize={14}
            showPrintMargin
            showGutter
            highlightActiveLine
            value={formatSql}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </Col>
      </Row>
      <style jsx global>{`
        .sql-formatter {
          width:100%;
          padding:10px 20px;
        } 
        .editorContainer {
          border: 1px dashed grey;
        }
      `}
      </style>
    </div>
  );
};
export default IndexPage;
