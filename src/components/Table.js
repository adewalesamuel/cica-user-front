import { Fragment } from "react";
import { Link } from 'react-router-dom';

export function Table(props) {
    const renderTableHead = () => {
        if (!props.tableHead) return null;

        let tableHead = [...props.tableHead];

        if (props.tableActions) tableHead.push('actions');

        return tableHead.map((item,index) => {
            return(
                <th key={index * Math.random()}>
                    {item.replace(/_/g, ' ')}
                </th>
            )
        })
    }
    const renderTableData = (data, dataIndex=0) => {
        let tableCells = [];

        for (const key in data)  {
            if (props.tableHead.includes(key)) {
                tableCells.push(<td style={{borderBottom: "1px solid #DFE3E7"}} 
                key={Math.random()}>
                    {data[key]}
                </td>);
            };
            
        }

        if (!props.tableActions) return tableCells;

        let actions = props.tableActions.map((item, index) => {
            if (item === "edit")
                return (
                    <button key={Math.random()} data-index={dataIndex} data-id={data.id} 
                    className="ml-1 btn" style={{backgroundColor: '#f3f5f7'}} 
                    onClick={event => props.handleEditClick(event, data) ?? null} >
                        <i className="dripicons-document-edit text-primary"></i>
                    </button>
                );
            if (item === "info")
                return (
                <button key={Math.random()} data-index={dataIndex} data-id={data.id} 
                className="ml-1 btn" style={{backgroundColor: '#f3f5f7'}} 
                onClick={event => props.handleInfoClick(event, data) ?? null}>
                    <i className="dripicons-information text-primary"></i>
                </button>);
            if (item === "delete")
                return (
                <button key={Math.random()} data-index={dataIndex} data-id={data.id} 
                className="ml-1 btn" style={{backgroundColor: '#f3f5f7'}} 
                onClick={event => {
                    if (!window.confirm('Voulez vous vraiment supprimer cette entrée ?'))
                        return;

                    props.handleDeleteClick(event, data);
                }}>
                    <i className="dripicons-trash text-danger"></i>
                </button>);
            return null;
        });

        tableCells.push(
            <td style={{borderBottom: "1px solid #DFE3E7"}} key={Math.random()}>
                {actions}
            </td>
        )

        return tableCells;
    }
    const renderChildrenRows = (item, index) => {
        if (!item || !item.children) return;

        return (
            <>
            <td  style={{borderRight: "1px solid #DFE3E7"}}></td>
            <td colSpan="6" style={{padding: "0px"}}>
                <table width="100%">
                    <tbody>
                        {
                            item.children.map((childItem, childIndex) => {
                                return (
                                    <tr key={(index + 1) * Math.random()}>
                                        {renderTableData(childItem, childIndex)}
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </td>
            </>
        )
    }
    const renderTableRows  = () =>  {
        if (!props.tableData) return null;

        return props.tableData.map((item,index) => {
            return(
                <Fragment key={(index + 1) * Math.random()}>
                    <tr key={(index + 1) * Math.random()}>
                        { renderTableData(item, index) }
                    </tr>
                    <tr key={(index + 1) * Math.random()}>
                        {renderChildrenRows(item, index)}
                    </tr>
                </Fragment>
            )
        })
    }

    return(
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        { renderTableHead() }
                    </tr>
                </thead>
                <tbody>
                    { renderTableRows() }
                </tbody>
            </table>
        </div>
    )
}