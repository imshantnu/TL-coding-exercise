import * as React from 'react';
import { AppContext } from '../../context/appContext';

const DetailsComponent = props => {
    const appContext = React.useContext(AppContext);

    const parse = React.useCallback(value => {
        if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No';
        }

        // make sure undefined and null are returned so thats why loos equality
        if (value == null) {
            return '';
        }

        return String(value);
    }, []);

    if (!appContext.selected) {
        return null;
    }

    return (
        <div className={props.className}>
            <table className="table is-bordered is-fullwidth">
                <caption>
                    Details of {appContext.selected.Name || appContext.selected.EntityName}
                </caption>

                <tbody>
                    {Object.keys(appContext.selected).map(key => (
                        <tr key={key}>
                            <th>{key}</th>
                            <td>{parse(appContext.selected[key])}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DetailsComponent;
