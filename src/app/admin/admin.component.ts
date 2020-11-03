import { Component, Input, OnInit } from '@angular/core';
import {ArrayDataSource} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {trigger,state,style,animate,transition} from '@angular/animations';

const TREE_DATA: MenuFlatNode[] = [
	{
		name: 'Dashboard',
		link: '/admin/dashboard',
		expandable: false,
		level: 0,
	}, 
	{
		name: 'tour package',
		expandable: true,
		level: 0,
	}, 
	{
		name: 'tour categories',
		link: '/admin/tour-category',
		expandable: false,
		level: 1,
	}, 
	{
		name: 'tours',
		link: '/admin/tours',
		expandable: false,
		level: 1,
	},
	{
		name: 'destinations',
		link: '/admin/destination',
		expandable: false,
		level: 1,
	}, 
	{
		name: 'bookings',
		link: '/admin/booking',
		expandable: false,
		level: 0,
	}, 
	{
		name: 'customers',
		expandable: false,
		level: 0,
	}, 
	{
		name: 'reviews',
		expandable: false,
		level: 0,
	},
	{
		name: 'email subscriptions',
		expandable: false,
		level: 0,
	}, 
	{
		name: 'blog',
		expandable: true,
		level: 0,
	}, 
	{
		name: 'Categories',
		expandable: false,
		level: 1,
	},
	{
		name: 'articles',
		expandable: false,
		level: 1,
	},
	{
		name: 'system',
		expandable: true,
		level: 0,
	},
	{
		name: 'settings',
		expandable: false,
		level: 1,
	},
	{
		name: 'users',
		expandable: false,
		level: 1,
	}
];



/** Flat node with expandable and level information */
interface MenuFlatNode {
  expandable: boolean;
  name: string;
  link?: string;
  level: number;
  isExpanded?: boolean;
}



@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
	animations: [
		trigger('openclose',[
			state('open',style({width: '*'})),
			state('close',style({width: '0%','padding':'0px'})),
			transition(
				'close=>open',
				[
					style(	{opacity: 0}),
					animate('1s ease-in')
				]
			),
			transition(
				'open=>close',
				[
					style({opacity: 1}),
					animate('2s ease-out')
				]
			)
	  	])
  	]
})
export class AdminComponent implements OnInit {
	//padding= 1;
	isOpen = false;
	isMenuOpen = false;
	isMobile =false;
	width =0;
	constructor() { }

	ngOnInit(): void {
		this.width = 20;
	}

	toggle(){
		this.isMenuOpen = !this.isMenuOpen;
		//this.isMenuOpen = this.isMenuOpen == false? true:false;

	}
	treeControl = new FlatTreeControl<MenuFlatNode>(
		node => node.level, node => node.expandable
	);

	dataSource = new ArrayDataSource(TREE_DATA);

	hasChild = (_: number, node: MenuFlatNode) => node.expandable;

	getParentNode(node: MenuFlatNode) {
		const nodeIndex = TREE_DATA.indexOf(node);

		for (let i = nodeIndex - 1; i >= 0; i--) {
			if (TREE_DATA[i].level === node.level - 1) {
				return TREE_DATA[i];
			}
		}
		return null;
	}

	shouldRender(node: MenuFlatNode) {
		let parent = this.getParentNode(node);
		while (parent) {
			if (!parent.isExpanded) {
				return false;
			}
			parent = this.getParentNode(parent);
		}
		return true;
	}

}
