import { Text } from 'react-native';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Rows = ({placeTouched}) => {
    const generateInitialData = () => {
        let data = [];
        for (let i = 1; i <= 5; ++i) {
            let tmp = [];
            for (let j = 1; j <= 5; ++j) {
                tmp.push({ column: j, color: 'gray' });
            }
            data.push(tmp);
        }
        return data;
    };

    const [rowsInfo, setRowsInfo] = useState(generateInitialData);

    const Reservation = (row, column) => {
        setRowsInfo((prevRowsInfo) =>
            prevRowsInfo.map((rowData, rowIndex) =>
                rowIndex === row
                    ? rowData.map((colData, colIndex) =>
                          colIndex === column
                              ? {
                                    ...colData,
                                    color: (rowsInfo[row][column].color !== '#CC397B' ? '#CC397B' : "gray"),
                                }
                              : colData,
                      )
                    : rowData,
            ),
        );
        if (rowsInfo[row][column].color == "gray") {
            placeTouched(row+1,column+1,1);
        } else {
            placeTouched(row+1,column+1,0);
        }
    };

    return (
        <RowsView>
            <MovieScreen>Экран</MovieScreen>
            {rowsInfo.map((row, indexRow) => (
                <Row>
                    <Text style={{ marginRight: 10 }}>{indexRow + 1}</Text>

                    {row.map((column, indexColumn) => (
                        <TouchableOpacity onPress={() => Reservation(indexRow, indexColumn)}>
                            <ColumnItem style={{ backgroundColor: column.color }}>
                                {column.column}
                            </ColumnItem>
                        </TouchableOpacity>
                    ))}
                    <Text style={{ marginLeft: 10 }}>{indexRow + 1}</Text>
                </Row>
            ))}
            <Answer>
                <ColumnItem style={{ backgroundColor: '#000000' }}>.</ColumnItem>
                <Text>Занято</Text>
                <ColumnItem style={{ backgroundColor: 'gray', marginLeft: 20 }}></ColumnItem>
                <Text>Свободно</Text>
                <ColumnItem style={{ backgroundColor: '#CC397B', marginLeft: 20 }}></ColumnItem>
                <Text>Выбрано</Text>
            </Answer>
        </RowsView>
    );
};

export default Rows;

const MovieScreen = styled.Text`
    width: 300px;
    height: 25px;
    border-radius: 20px 20px 150px 150px;
    background-color: plum;
    text-align: center;
    margin-bottom: 50px;
`;

const RowsView = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
`;

const Row = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
`;

const ColumnItem = styled.Text`
    width: 20px;
    height: 20px;
    text-align: center;
    border: 1px solid gray;

    background-color: gray;
    border-radius: 5px;
    margin: 0 5px;
`;

const Answer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`;
