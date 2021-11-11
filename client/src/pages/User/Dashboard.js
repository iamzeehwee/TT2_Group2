import { MDBBtn, MDBIcon, MDBDataTable, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from "mdbreact";
import React from "react";
import DashboardSideNav from "../../components/DashboardSideNav";
import ConfirmModal from "../../components/ConfirmModal";
import axios from '../../axios';

const deleteProjectConfirmationMessage = "Are you sure you want to delete this project? This process cannot be undone.";
const projectsTest = [
  {
      "id": 1,
      "user_id": 4,
      "name": "RTF",
      "budget": 12000,
      "description": "Realtime Face Recogniton"
  },
  {
      "id": 2,
      "user_id": 1,
      "name": "SWT",
      "budget": 80000,
      "description": "Smart Watch Tracker"
  },
  {
      "id": 3,
      "user_id": 2,
      "name": "ULS",
      "budget": 11000,
      "description": "Upgrade Legacy System"
  }
];

const expensesTest = [
  {
      "id": 1,
      "project_id": 2,
      "category_id": 2,
      "name": "Server Maintenance",
      "description": "Server maintenance and upgrading work to incorporate BC plans",
      "amount": 30000,
      "created_at": "2021-11-04T16:00:00.000Z",
      "created_by": "Jacky",
      "updated_at": "2021-11-06T16:00:00.000Z",
      "updated_by": "Jacky"
  },
  {
      "id": 2,
      "project_id": 3,
      "category_id": 4,
      "name": "Consultant",
      "description": "Consultancy services for integration work",
      "amount": 10000,
      "created_at": "2021-11-06T16:00:00.000Z",
      "created_by": "Helen",
      "updated_at": "2021-11-07T16:00:00.000Z",
      "updated_by": "Helen"
  }
];


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: {},
      selectedExpense: {},
      selectedIndex: 0,
      projects: projectsTest,
      expenses: expensesTest,
      name:'',
      editModal: false,
      successFailModal: false,
    }
  }

  toggleEditModal = () => {
    this.setState({ editModal: !this.state.editModal});
  }

  toggleConfirmationModal = () => {
    this.setState({ editModal: false, confirmationModal: !this.state.confirmationModal });
  }

  scrollToTop = () => window.scrollTo(0, 0);

  displayExpenses = () => {
    const data = {
      columns: [
        {
          label: 'Project',
          field: 'title',
          sort: 'asc',
        },
        {
          label: 'Description',
          field: 'description',
          sort: 'asc',
        },
        {
          label: 'Budget',
          field: 'budget',
          sort: 'asc'
        },
        {
          label: 'Options',
          field: 'options',
          sort: 'disabled',
          width: 100
        },,
      ],
      rows: this.getExpenseRows()
    }

    if (data.rows.length === 0) {
      return (
        <MDBCol align="center"><h6>{'No Expenses'}</h6></MDBCol>
      )
    }
    return (
      <MDBDataTable
        style={{ textAlign: "center", verticalAlign: "center" }}
        bordered
        small
        data={data}
        searchLabel={'Search'}
        entriesLabel={'Showing'}
        paginationLabel={['Previous', 'Next']}
        infoLabel={['Showing', 'To', `【${'Total'}`, `${'Entries'}】`]}
        noRecordsFoundLabel={'No Matching Records'}
        noBottomColumns
      />
    );
  };

  getExpenseRows = () => {
    var list = this.state.expenses;
    console.log(list);
    var newList = []
    list && list.forEach((exp, index) => {
      var obj = {
        title: exp.name,
        description: exp.description,
        budget: exp.amount,
        options: this.showActions(exp),
        // clickEvent: () => {
        //     this.setState({
        //       selectedPage: 1,
        //       selectedScript: script
        //     })
        //   }
        // }
      }
        newList.push(obj);
    })

    return newList;
  }

showActions = (exp) => {
    return (
      <>

        <MDBBtn outline color="indigo lighten-2" className="px-3 py-2" size="sm" onClick={() => { this.selectExpense(exp); this.toggleEditModal() }}>
          <MDBIcon icon="edit" size="lg" />
        </MDBBtn>

        <MDBBtn outline color="red" className="px-3 py-2" size="sm" onClick={() => { this.selectExpense(exp); this.toggleConfirmationModal() }}>
          <MDBIcon icon="trash-alt" size="lg" />
        </MDBBtn>
      </>
    )
  }

  selectExpense = (exp) => {
    this.setState({ selectedExpense: exp });
  }

  deleteExpense = () => {
    let obj = {};
    // axios.post('/teacher/admin/deleteSemester', {
    //   semester_id: this.state.selectedSemester.semester_id,
    // })
    //   .then(res => {
    //     if (res.data.success) {
    //       obj.success = true
    //       obj.message = res.data.msg
    //     } else {
    //       obj.success = false;
    //       obj.message = res.data.msg;
    //     }
    //     this.submit(obj);
    //   })
    //   .catch(err => {
    //     obj.success = false;
    //     obj.message = 'Error deleting semester';
    //     this.submit(obj);
    //   })
  }

  drawerWidth = 240;

  render() {
    const styles = {
      page: {
        paddingTop: '80px',
        marginLeft: 60,
      },
      cardNav: {
        color: 'black'
      },
      card: {
        cursor: 'pointer'
      },
      header: {
        position: 'fixed',
        zIndex: '9',
        width: '100%',
        top: 0,
        paddingTop: '64px',
        background: 'white'
      },
      content: {
        paddingTop: '80px',
        paddingLeft: '50px',
        paddingRight: '50px'
      },
      listItem: {
        color: 'black'
      },
      img: {
        paddingTop: '30px',
        paddingLeft: '30px',
        paddingRight: '30px',
      }
    };

    return (
      <>
        <div style={styles.header}>
          <MDBContainer>
            <MDBRow className="pt-2">
              <MDBCol md="12">
                <h1 className="text-center my-1 font-weight-bold">{'Dashboard'}</h1>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr className="mt-0 mb-0" />
        </div>
        <DashboardSideNav></DashboardSideNav>

        <MDBContainer>
          <div style={styles.page}>
            {this.displayExpenses()}
          </div>
        </MDBContainer>

        <ConfirmModal message={deleteProjectConfirmationMessage} submit={this.deleteProject} modal={this.state.confirmationModal} toggleModal={this.toggleConfirmationModal}></ConfirmModal>
      </>
    );
  }
}

export default Dashboard;
